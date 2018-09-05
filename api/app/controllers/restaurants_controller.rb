class RestaurantsController < ApplicationController
    
    def index
        render json: { restaurants: Restaurant.all }, include: :violations
    end

    def show
        id = params[:id]
        render json: { restaurants: Restaurant.where({camis: id})}, include: :violations
    end
end
