/*
    Code by Sambhav Saxena
    Github: @sambhavisthatsameguy
*/

#include <bits/stdc++.h>
#define ll long long
using namespace std;

void insert(unsigned i, bool data[])
{
    data[i] = 1;
}

void remove(unsigned i, bool data[])
{
    data[i] = 0;
}

bool find(unsigned i, bool data[])
{
    return data[i];
}

int main()
{
    ll n;
    char choice;
    cout << "Enter the size for the data structure:\n\t";
    cin >> n;
    ll insertop = n, deleteop = 0;
    bool data[n];
    for (ll i = 0; i < n; i++)
    {
        data[i] = {0};
    }
    do
    {
        ll operation;
        cout << "What operation do you wish to perform?\nEnter 1 to insert\nEnter 2 to delete\n";
        cout << "Enter 3 to check existance\n\t";
        cin >> operation;
        switch (operation)
        {
        case 1:
            if (insertop > n)
            {
                cout << "Size limit reached\n";
                break;
            }
            else if (insertop < 0)
            {
                cout << "Size limit reached\n";
                break;
            }
            else if (insertop <= n && insertop > 0)
            {
                ll numbertobeinserted;
                insertop--;
                deleteop++;
                cout << "Enter the number to be inserted:\n\t";
                cin >> numbertobeinserted;
                insert(numbertobeinserted, data);
                cout << numbertobeinserted << " inserted" << endl;
                break;
            }
        case 2:
            if (deleteop == 0)
            {
                cout << "No elements to delete\n";
                break;
            }
            else if (deleteop < 0)
            {
                cout << "No elements to delete\n";
                break;
            }
            else
            {
                ll numbertobedeleted;
                deleteop--;
                insertop++;
                cout << "Enter the number to be deleted:\n\t";
                cin >> numbertobedeleted;
                if (find(numbertobedeleted, data))
                {
                    remove(numbertobedeleted, data);
                    cout << numbertobedeleted << " deleted" << endl;
                }
                else
                {
                    cout << "Number does not exist" << endl;
                }
                break;
            }
        case 3:
            ll numbertobechecked;
            cout << "Enter the number to be checked for:\n\t";
            cin >> numbertobechecked;
            find(numbertobechecked, data) ? cout << "Number exists" << endl : cout << "Number does not exist" << endl;
            break;
        default:
            cout << "Enter a valid number" << endl;
            break;
        }
        cout << "Do you wish to perform another operation?\n";
        cout << "Enter 1 to proceed, any other character to exit\n\t";
        cin >> choice;
    } while (choice == '1');
    return 0;
}
