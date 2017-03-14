class LiftsController < ApplicationController
  def index
    @lifts = Lift.all.order('created_at DESC')
    respond_to do |format|
      format.html
      format.json { render json: @lifts }
    end
  end

  def create
    @lift = Lift.new params_lift
    if @lift.save
      render json: @lift
    else
      render json: @lift.error, status: :unprocessable_entity
    end
  end

  private
  def params_lift
    params.require(:lift).permit(:date, :liftname, :ismetric, :weightlifted, :repsperformed, :onerm)
  end
end
