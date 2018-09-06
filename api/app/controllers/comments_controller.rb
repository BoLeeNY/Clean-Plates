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

    def create
        camis = params[:restaurant_id]
        if (camis)
        @comment = Restaurant.find_by({camis: camis}).comments.new(comment_params)
        else
        @comment = Comment.new(comment_params)
        end
        if @comment.save
            render json: { comment: @comment }
        else
            render json: { message: "Oops", errors: @comment.error }, status: :bad_request
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
        render json: { comment: @comment }
        else
            render json: { message: "Oops", errors: @comment.error }
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: { message: "Deleted Comment #{params[:id]}"}
    end

    private

    def comment_params
        params
            .permit(:name, :comment, :restaurant_id)
    end
end
