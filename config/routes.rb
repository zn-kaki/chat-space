Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  root 'users#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update, :destroy] do
    resources :messages, only: [:index, :create]
  end
end
