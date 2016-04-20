class RecordsController < ApplicationController
	def index
		@records = Record.all
	end
	def create
		puts "creating"
		puts params.inspect
		@record = Record.new(record_params)

		if @record.save
			render json: @record
		else
			render json: @record.errors, status: :unprocessable_entity
		end
	end
	def destroy
		@record = Record.find(params[:id])
		@record.destroy
		head :no_content
	end
	def update
		puts params
		@record = Record.find(params[:id])
		if @record.update(record_params)
			render json: @record
		else
			render json: @record.errors, status: :unprocessable_entity
		end
	end

	private

		def record_params
			params.permit(:title, :amount, :date)
		end
end
