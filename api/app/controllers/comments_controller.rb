class CommentsController < ApplicationController

    def index
        render json: { comments: Comment.all }, include: :restaurant
    end
end
