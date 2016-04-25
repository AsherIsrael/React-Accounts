class UsersController < ApplicationController
	def index

	end
	def create
		@user = User.new(params.permit(:name, :username, :password, :password_confirmation))
		if @user.save
			session[:user_id] = @user.id
			@records = Record.all
			render json: {status: true}
		else
			render json: {status: false, errors: @user.errors.full_messages}
		end
	end
	def show
	end
	def new
	end
	def login
		@user = User.where(username: "#{params[:username]}")[0]
		result = @user.authenticate(params[:password]) rescue false
		if result
			session[:user_id] = @user.id
			render json: {status: true}
		else
			render json: {status: false, errors: @user.errors}
		end
	end
	def logout
		reset_session
		redirect_to "/"
	end
end
