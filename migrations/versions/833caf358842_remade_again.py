"""remade again

Revision ID: 833caf358842
Revises: 
Create Date: 2019-03-29 09:22:07.283933

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '833caf358842'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_username'), 'user', ['username'], unique=True)
    op.create_table('problem',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('color', sa.String(length=32), nullable=True),
    sa.Column('grade', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_problem_color'), 'problem', ['color'], unique=False)
    op.create_index(op.f('ix_problem_grade'), 'problem', ['grade'], unique=False)
    op.create_index(op.f('ix_problem_timestamp'), 'problem', ['timestamp'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_problem_timestamp'), table_name='problem')
    op.drop_index(op.f('ix_problem_grade'), table_name='problem')
    op.drop_index(op.f('ix_problem_color'), table_name='problem')
    op.drop_table('problem')
    op.drop_index(op.f('ix_user_username'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    # ### end Alembic commands ###
