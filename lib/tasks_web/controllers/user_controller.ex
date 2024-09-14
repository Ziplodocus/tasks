defmodule TasksWeb.UserController do
  use TasksWeb, :controller

  def get(conn, params) do
    render(conn, "tasks/" <> params["action"] <> ".html", %{
      params: params,
      type: params["id"],
      method: :get
    })
  end

  def post(conn, params) do
    render(conn, "tasks/" <> params["action"] <> ".html", %{
      params: params,
      type: params["id"],
      method: :post
    })
  end
end
