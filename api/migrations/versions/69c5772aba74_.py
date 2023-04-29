"""empty message

Revision ID: 69c5772aba74
Revises: 
Create Date: 2023-04-29 13:41:45.608034

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '69c5772aba74'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('roles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('profile_information', sa.String(length=200), nullable=False),
    sa.Column('profile_picture', sa.String(length=150), nullable=False),
    sa.Column('roles_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['roles_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('medical_appoinment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('doctor_id', sa.Integer(), nullable=False),
    sa.Column('file', sa.String(length=150), nullable=False),
    sa.Column('comment', sa.String(length=500), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['doctor_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('medical_file',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('file', sa.String(length=150), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id', 'user_id')
    )
    op.create_table('medical_record',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('full_name', sa.String(length=150), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('identity_card', sa.Integer(), nullable=False),
    sa.Column('adress', sa.String(length=200), nullable=False),
    sa.Column('phone_number', sa.Integer(), nullable=False),
    sa.Column('reason_for_consultation', sa.String(length=200), nullable=False),
    sa.Column('current_illness', sa.String(length=200), nullable=False),
    sa.Column('criminal_record', sa.String(length=200), nullable=False),
    sa.Column('family_history', sa.String(length=200), nullable=False),
    sa.Column('surgical_history', sa.String(length=200), nullable=False),
    sa.Column('physical_examination', sa.String(length=500), nullable=False),
    sa.Column('diagnosis', sa.String(length=200), nullable=False),
    sa.Column('treatment', sa.String(length=200), nullable=False),
    sa.Column('observations', sa.String(length=200), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('medical_record')
    op.drop_table('medical_file')
    op.drop_table('medical_appoinment')
    op.drop_table('users')
    op.drop_table('roles')
    # ### end Alembic commands ###
