"""empty message

Revision ID: 32136d6ef503
Revises: 3cd23121700d
Create Date: 2023-05-06 17:17:51.546142

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '32136d6ef503'
down_revision = '3cd23121700d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('profile_picture',
               existing_type=sa.VARCHAR(length=150),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('profile_picture',
               existing_type=sa.VARCHAR(length=150),
               nullable=False)

    # ### end Alembic commands ###