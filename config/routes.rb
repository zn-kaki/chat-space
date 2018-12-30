Rails.application.routes.draw do
  root 'messages#index'
  resources :users, only: [:edit, :update]
    resources :groups, only: [:index, :new, :create, :edit, :update] do
end
end
