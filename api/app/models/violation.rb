class Violation < ApplicationRecord
    belongs_to :restaurant, optional: true, primary_key: 'camis'
end
