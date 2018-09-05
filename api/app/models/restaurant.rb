class Restaurant < ApplicationRecord
    has_many :violations, primary_key: 'camis'

end


