import pandas as pd
df = pd.read_excel("Water_Quality_Rivers_2018.xlsx")
# for i in df.index:
#         df['TEMPERATURE MEAN'][i] = (int(df['TEMPERATURE MIN'][i]) + int(df['TEMPERATURE MAX'][i]))/2
#         df['DISSOLVED OXYGEN MEAN'][i] = (int(df['DISSOLVED OXYGEN MIN'][i]) + int(df['DISSOLVED OXYGEN MAX'][i]))/2
#         df['PH MEAN'][i] = (int(df['PH MIN'][i]) + int(df['PH MAX'][i]))/2
#         df['CONDUCTIVITY (ΜMHO/CM) MEAN'][i] = (int(df['CONDUCTIVITY (ΜMHO/CM) MIN'][i]) + int(df['CONDUCTIVITY (ΜMHO/CM) MAX'][i]))/2
#         df['BIO- CHEMICAL OXYGEN DEMAND (MG/L) MEAN'][i] = (int(df['BIO- CHEMICAL OXYGEN DEMAND (MG/L) MIN'][i]) + int(df['BIO- CHEMICAL OXYGEN DEMAND (MG/L) MAX'][i]))/2
#         df['NITRATE MEAN'][i] = (int(df['NITRATE MIN'][i]) + int(df['NITRATE MAX'][i]))/2
#         df['FAECAL COLIFORM MEAN'][i] = (int(df['FAECAL COLIFORM MIN'][i]) + int(df['FAECAL COLIFORM MAX'][i]))/2
#         df['TOTAL COLIFORM MEAN'][i] = (int(df['TOTAL COLIFORM MIN'][i]) + int(df['TOTAL COLIFORM MAX'][i]))/2
df['TEMPERATURE MEAN'] = (df['TEMPERATURE MIN'] + df['TEMPERATURE MAX'])/2
df['DISSOLVED OXYGEN MEAN'] = (df['DISSOLVED OXYGEN MIN'] + df['DISSOLVED OXYGEN MAX'])/2
df['PH MEAN'] = (df['PH MIN'] + df['PH MAX'])/2
df['CONDUCTIVITY (ΜMHO/CM) MEAN'] = (df['CONDUCTIVITY (ΜMHO/CM) MIN'] + df['CONDUCTIVITY (ΜMHO/CM) MAX'])/2
df['BIO- CHEMICAL OXYGEN DEMAND (MG/L) MEAN'] = (df['BIO- CHEMICAL OXYGEN DEMAND (MG/L) MIN'] + df['BIO- CHEMICAL OXYGEN DEMAND (MG/L) MAX'])/2
df['NITRATE MEAN'] = (df['NITRATE MIN'] + df['NITRATE MAX'])/2
df['FAECAL COLIFORM MEAN'] = (df['FAECAL COLIFORM MIN'] + df['FAECAL COLIFORM MAX'])/2
df['TOTAL COLIFORM MEAN'] = (df['TOTAL COLIFORM MIN'] + df['TOTAL COLIFORM MAX'])/2
df.to_excel("output16.xlsx")