class RestaurantsController < ApplicationController
    
    def index
        render json: { restaurants: Restaurant.all }, include: :violations, include: :comments
    end

    def show
        id = params[:id]
        render json: { restaurants: Restaurant.where({camis: id})}, include: :violations, include: :comments
    end
end
