class RestaurantsController < ApplicationController
    
    def index
        name = params[:name]
        if (name)
            @restaurants = Restaurant.find_by({name: name.upcase})
        else
            @restaurants = Restaurant.all
        end
        render json: { restaurants: @restaurants }, include: :violations
    end

    def show
        id = params[:id]
        render json: { restaurants: Restaurant.where({camis: id})}, include: [:violations, :comments]
    end
end
