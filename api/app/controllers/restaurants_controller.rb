class RestaurantsController < ApplicationController
    # Shows all Restaurants
    def index
        name = params[:name]
        if (name)
            @restaurants = Restaurant.find_by({name: name.upcase})
        else
            @restaurants = Restaurant.all
        end
        render json: { restaurants: @restaurants }, include: [:violations, :comments]
    end
    # Shows a single Restaurant
    def show
        id = params[:id]
        render json: { restaurants: Restaurant.where({camis: id})}, include: [:violations, :comments]
    end
end
