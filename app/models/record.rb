class Record < ActiveRecord::Base
	validates :date, :title, :amount, presence: true
end
