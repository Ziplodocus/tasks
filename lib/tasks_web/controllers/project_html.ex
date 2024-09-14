defmodule TasksWeb.ProjectHTML do
  @moduledoc """
  This module contains pages rendered by PageController.

  See the `page_html` directory for all templates available.
  """
  use TasksWeb, :html

  embed_templates "project_html/*"
end
