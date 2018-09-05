class CommentsController < ApplicationController

    def index
        camis = params[:restaurant_id]
        if (camis)
        @comments = Restaurant.find_by({camis: camis}).comments
        else
        @comments = Comment.all
        end
        render json: { comments: @comments }, include: :restaurant
    end

    def show
        id = params[:id]
        render json: { comments: Comment.find(id) }, include: :restaurant
    end
end
