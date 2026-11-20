class AddCursoToAlumnos < ActiveRecord::Migration[8.1]
  def change
    add_column :alumnos, :curso, :string
  end
end
