class Violation < ApplicationRecord
    belongs_to :restaurant, optional: true, foreign_key: "restaurant_id"
end
