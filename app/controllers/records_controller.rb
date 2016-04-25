class RecordsController < ApplicationController
	before_action :require_login
	def index
		@records = Record.where(user:current_user)
	end
	def create
		@record = Record.new(record_params)

		if @record.save
			@record.update(user: current_user)
			render json: @record
		else
			render json: @record.errors, status: :unprocessable_entity
		end
	end
	def destroy
		@record = Record.find(params[:id])
		@record.destroy if @record.user == current_user
		head :no_content
	end
	def update
		@record = Record.find(params[:id])
		success = @record.update(record_params) if @record.user == current_user
		if success
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
