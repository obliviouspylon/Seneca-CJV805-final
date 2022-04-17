
// list = ["Hotels","Apartments","Resorts","Condos","Bed and Breakfast","Motels","House"]
list = [true,false]
// list = ["Edmonton, Alberta",
// "Victoria, British Columbia",
// "Winnipeg, Manitoba",
// "Fredericton, New Brunswick",
// "St. John's, Newfoundland and Labrador",
// "Halifax, Nova Scotia",
// "Toronto, Ontario",
// "Charlottetown, Prince Edward Island",
// "Quebec City, Quebec",
// "Regina, Saskatchewan"]

for (let i = 0; i < process.argv[2]; i ++){
    console.log(list[Math.floor(Math.random() * list.length)])
}