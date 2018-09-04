class Restaurant < ApplicationRecord
    has_many :violations, foreign_key: "camis"

end


