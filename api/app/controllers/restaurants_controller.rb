class RestaurantsController < ApplicationController
    
    def index
        name = params[:name].upcase
        if (name)
            @restaurants = Restaurant.find_by({name: name})
        else
            @restaurants = Restaurant.all
        end
        render json: { restaurants: @restaurants }, include: :violations
    end

    def show
        id = params[:id]
        render json: { restaurants: Restaurant.where({camis: id})}, include: :violations, include: :comments
    end
end
