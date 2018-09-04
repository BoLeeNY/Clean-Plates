class RestaurantsController < ApplicationController
    
    def index
        render json: { restaurants: Restaurant.all }
    end
end
