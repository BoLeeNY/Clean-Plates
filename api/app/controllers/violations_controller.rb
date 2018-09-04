class ViolationsController < ApplicationController

    def index
        camis = params[:id]
        if (camis)
        @violations = Restaurant.where({camis: camis}).violations
        else
        @violations = Violation.all
        end
        render json: { violations: @violations }, include: :restaurants
    end
end
