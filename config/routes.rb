Rails.application.routes.draw do
  resources :users
  resources :records
  root 'users#new'
  post '/login' => 'users#login'
  get '/logout' => 'users#logout'
end
