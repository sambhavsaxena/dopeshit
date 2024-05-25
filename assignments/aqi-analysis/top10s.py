import pandas as pd

df = pd.read_csv("data.csv", encoding='cp1252', low_memory=False)   # encoding workaround for arch linux
df['date'] = pd.to_datetime(df['date'])

df['year'] = df['date'].dt.year

print("This program fetches the top 10 most polluted cities / states in India for the given year.\n")
user_preference = input("Do you wish to find among cities or states? Enter 'c' for city or 's' for state: ").lower()

if user_preference not in ['c', 's']:
    print("Invalid input. Please enter 'c' for city or 's' for state!")
else:
    pollutant = input("Enter the pollutant (e.g., 'so2', 'no2', 'spm', 'rspm', 'pm2_5'): ").lower()
    if pollutant not in ['so2', 'no2', 'spm', 'rspm', 'pm2_5']:
        print("Invalid input. Please enter a valid pollutant!")
    else:
        if user_preference == 'c':
            group_column = 'location'
        else:
            group_column = 'state'
        yearly_pollutant = df.groupby(['year', group_column])[pollutant].mean().reset_index()
        top_places_by_year = yearly_pollutant.groupby('year').apply(lambda x: x.nlargest(10, pollutant)).reset_index(drop=True)
        for year, group in top_places_by_year.groupby('year'):
            print(f"Year {year}:")
            for idx, row in group.iterrows():
                print(f"{row[group_column]}: {row[pollutant]}")
            print()
