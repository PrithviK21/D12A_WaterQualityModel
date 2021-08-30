import pandas as pd
df = pd.read_excel("Water_Quality_Rivers_2016.xlsx")
for i in df.index:
    try:
        df['Temperature mean'][i] = float((df['Temperature min'][i] + df['Temperature max'][i])/2)
        df['Dissolved Oxygen mean'][i] = float((df['Dissolved Oxygen min'][i] + df['Dissolved Oxygen max'][i])/2)
        df['pH mean'][i] = float((df['pH min'][i] + df['pH max'][i])/2)
        df['Conductivity (µmho/cm) mean'][i] = float((df['Conductivity (µmho/cm) min'][i] + df['Conductivity (µmho/cm) max'][i])/2)
        df['Bio- Chemical Oxygen Demand (mg/L) mean'][i] = float((df['Bio- Chemical Oxygen Demand (mg/L) min'][i] + df['Bio- Chemical Oxygen Demand (mg/L) max'][i])/2)
        df['Nitrate mean'][i] = float((df['Nitrate min'][i] + df['Nitrate max'][i])/2)
        df['Faecal Coliform mean'][i] = float((df['Faecal Coliform min'][i] + df['Faecal Coliform max'][i])/2)
        df['Total Coliform mean'][i] = float((df['Total Coliform min'][i] + df['Total Coliform max'][i])/2)
    except:
        df['Temperature mean'][i] = -1
        df['Dissolved Oxygen mean'][i] = -1
        df['pH mean'][i] = -1
        df['Conductivity (µmho/cm) mean'][i] = -1
        df['Bio- Chemical Oxygen Demand (mg/L) mean'][i] = -1
        df['Nitrate mean'][i] = -1
        df['Faecal Coliform mean'][i] = -1
        df['Total Coliform mean'][i] = -1
df.to_excel("output16.xlsx")