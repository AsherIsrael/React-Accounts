class Record < ActiveRecord::Base
	belongs_to :user
	validates :date, :title, :amount, presence: true
end
