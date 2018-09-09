

# HTTParty fetches from the API and sets it to the response variable
response = HTTParty.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json')
# Empties Restaurant and Violation tables
Restaurant.delete_all
Violation.delete_all
# Iterates through data and inserts into the Restaurant table
response.each do |resp|

    Restaurant.create!({
        camis: resp["camis"],
        name: resp["dba"],
        borough: resp["boro"],
        building: resp["building"],
        street: resp["street"],
        zip: resp["zipcode"],
        cuisine: resp["cuisine_description"]
    }) 
end
# Iterates through data and inserts into the Response table
response.each do |resp|
    Violation.create!({
        grade: resp["grade"],
        inspection_date: resp["inspection_date"],
        description: resp["violation_description"],
        restaurant_id: resp["camis"]
    })
end
# Inserts dummy data into the Comments table
Comment.create!({name: 'Blerf', comment: 'I love this place, but I am never going back now!', restaurant_id: 41216675})
Comment.create!({name: 'Shuckle', comment: 'This is gross!', restaurant_id: 41216675})
