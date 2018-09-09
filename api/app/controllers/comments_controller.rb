class CommentsController < ApplicationController
    # Shows all Comments
    def index
        camis = params[:restaurant_id]
        if (camis)
        @comments = Restaurant.find_by({camis: camis}).comments
        else
        @comments = Comment.all
        end
        render json: { comments: @comments }, include: :restaurant
    end
    # Shows a single COmment
    def show
        id = params[:id]
        render json: { comments: Comment.find(id) }, include: :restaurant
    end
    #Creates a Comment
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
    # Updates a Comment
    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
        render json: { comment: @comment }
        else
            render json: { message: "Oops", errors: @comment.error }
        end
    end
    # Deletes a Comment
    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: { message: "Deleted Comment #{params[:id]}"}
    end

    private
    # Allows specific incoming parameters
    def comment_params
        params
            .permit(:name, :comment, :restaurant_id)
    end
end
