import pandas as pd

df = pd.read_csv("data.csv", encoding='cp1252', low_memory=False)
df['date'] = pd.to_datetime(df['date'])
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month

print("This program fetches the monthly AQI for a given city in a particular year.\n")

year = int(input("Enter the year (e.g. 2006): "))
city = input("Enter the city name (e.g. Faridabad): ").title()
city_data = df[(df['location'] == city) & (df['year'] == year)]

if city_data.empty:
    print(f"No data available for {city} in the year {year}.")
else:
    monthly_air_quality = city_data.groupby('month').agg({
        'so2': 'mean',
        'no2': 'mean',
        'rspm': 'mean',
        'spm': 'mean',
        'pm2_5': 'mean'
    }).reset_index()

    monthly_air_quality['month'] = pd.to_datetime(monthly_air_quality['month'], format='%m').dt.strftime('%B')
    print(f"Month-wise air quality of {city} in {year}:")
    print(monthly_air_quality)
