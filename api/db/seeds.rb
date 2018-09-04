# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


response = HTTParty.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json')


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

response.each do |resp|
    Violation.create!({
        grade: resp["grade"],
        inspection_date: resp["inspection_date"],
        description: resp["violation_description"],
        restaurant_id: resp["camis"]
    })
end
    
