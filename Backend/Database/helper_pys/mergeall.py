import pandas as pd
import glob

filenames = glob.glob("*.xlsx")
columns_name = ["STATION CODE","LOCATION","STATE","TEMPERATURE MIN","TEMPERATURE MAX","TEMPERATURE MEAN","DISSOLVED OXYGEN MIN","DISSOLVED OXYGEN MAX","DISSOLVED OXYGEN MEAN","PH MIN","PH MAX","PH MEAN","CONDUCTIVITY MIN","CONDUCTIVITY MAX","CONDUCTIVITY MEAN","BOD MIN","BOD MAX","BOD MEAN","NITRATE MIN","NITRATE MAX","NITRATE MEAN","FAECAL COLIFORM MIN","FAECAL COLIFORM MAX","FAECAL COLIFORM MEAN","TOTAL COLIFORM MIN","TOTAL COLIFORM MAX","TOTAL COLIFORM MEAN","YEAR"]
merge = pd.DataFrame(columns = columns_name)
df = pd.DataFrame()
for filename in filenames:
    df = pd.read_excel(filename)
    merge = merge.append(df, ignore_index=True)
    
merge.to_excel("outputall.xlsx", index=False)