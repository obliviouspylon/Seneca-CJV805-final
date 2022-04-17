import csv
import json

headers =["id","title","img","description","price","type","location","bestseller","Pool","Breakfast Included","WiFi included","Parking","Airport Transfers","House Rules"
]
array = []
# opening the CSV file
with open('D:\OneDrive - Seneca\CJV 805\Assignments\Assignment 1\db.csv', mode ='r') as file:
  
  # reading the CSV file
  csvFile = csv.reader(file)
 
  # displaying the contents of the CSV file
  for lines in csvFile:
    House = lines[13:]
    if "" in House:
      House.remove("")
    for i in range(13):
      if lines[i] == "TRUE":
        lines[i] = True
      elif lines[i] == "FALSE":
        lines[i] = False
    temp = {
      "id": int(lines[0]),
      "title": lines[1],
      "img": lines[2],
      "description": lines[3],
      "price": float(lines[4]),
      "type": lines[5],
      "location": lines[6],
      "bestseller": lines[7],
      "Amenities":{
        'Pool':bool(lines[8]),
        'Breakfast Included':bool(lines[9]), 
        'WiFi included':bool(lines[10]),
        'Parking':bool(lines[11]), 
        'Airport Transfers':bool(lines[12])
      },
      "House Rules":House
    }
    array.append(temp)


with open("D:\OneDrive - Seneca\CJV 805\Assignments\Assignment 1\sample.json", "w") as outfile:
    for a in array:
      json.dump(a, outfile)
      outfile.write(',')