class ViolationsController < ApplicationController
    # Shows all Violations
    def index
        camis = params[:restaurant_id]
        if (camis)
        @violations = Restaurant.find_by({camis: camis}).violations
        else
        @violations = Violation.all
        end
        render json: { violations: @violations }, include: :restaurant
    end
end
