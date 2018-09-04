class Restaurant < ApplicationRecord
    has_many :violations

    def get_restaurants
        response = HTTParty.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json')
        puts response.body
    end
end
