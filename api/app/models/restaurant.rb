class Restaurant < ApplicationRecord
    has_many :violations, primary_key: 'camis'
    has_many :comments, primary_key: 'camis'
end


