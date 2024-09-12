defmodule TasksWeb.PageController do
  use TasksWeb, :controller

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
  end

  def show(conn, params) do
    render(conn, "create-" <> params["type"] <> ".html", %{
      params: params,
      type: params["id"],
      method: :get
    })
  end

  def create(conn, params) do
    render(conn, "create-" <> params["type"] <> ".html", %{
      params: params,
      type: params["id"],
      method: :post
    })
  end

  def edit(conn, params) do
    render(conn, "edit-" <> params["type"] <> ".html", %{
      params: params,
      type: params["id"],
      method: :post
    })
  end
end
