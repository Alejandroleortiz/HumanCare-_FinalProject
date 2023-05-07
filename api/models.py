from flask_sqlalchemy import SQLAlchemy
db=SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(120), nullable=False)
    speciality = db.Column(db.String(120), default = 'Patient Account', nullable=True)
    city = db.Column(db.String(120), nullable=False)
    country = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    profile_picture = db.Column(db.String(150), default = 'no picture', nullable=True)
    roles_id = db.Column(db.Integer, db.ForeignKey('roles.id'), default=1, nullable =False)
    medical_record = db.relationship('Medical_record',  backref="user", uselist = False)
    medical_appoinments = db.relationship('Medical_appoinment', foreign_keys='[Medical_appoinment.doctor_id]', backref='doctor')
    patient_appoinments = db.relationship('Medical_appoinment', foreign_keys='[Medical_appoinment.user_id]', backref='patient')

    
    
    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "gender": self.gender,
            "email": self.email,
            "phone_number": self.phone_number,
            "speciality": self.speciality,
            "city": self.city,
            "country": self.country,
            "password": self.password,
            "profile_picture": self.profile_picture,
        }
    
    
    # def get_medical_record(self):
    #     return list(map(lambda r: r.serialize(), self.medical_record))
    
    # def get_patient_appoinments(self):
    #     return list(map(lambda a: a.serialize(), self.patient_appoinments))
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        
class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    users = db.relationship('User',  backref="role")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        
class Medical_file(db.Model):
    __tablename__ = 'medical_file'
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'))
    file = db.Column(db.String(150), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "file": self.file,
            "date": self.date,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Medical_record(db.Model):
    __tablename__ = 'medical_record'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    full_name = db.Column(db.String(150), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    identity_card = db.Column(db.Integer, nullable=False)
    adress = db.Column(db.String(200), nullable=False)
    phone_number =db.Column(db.String(80), nullable=False)
    reason_for_consultation = db.Column(db.String(200), nullable=False)
    current_illness = db.Column(db.String(200), nullable=False)
    criminal_record = db.Column(db.String(200), nullable=False)
    family_history = db.Column(db.String(200), nullable=False)
    surgical_history = db.Column(db.String(200), nullable=False)
    physical_examination = db.Column(db.String(500), nullable=False)
    diagnosis = db.Column(db.String(200), nullable=False)
    treatment = db.Column(db.String(200), nullable=False)
    observations = db.Column(db.String(200), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "full_name": self.full_name,
            "age": self.age,
            "identity_card": self.identity_card,
            "adress": self.adress,
            "phone_number": self.phone_number,
            "reason_for_consultation": self.reason_for_consultation,
            "current_illness": self.current_illness,
            "criminal_record": self.criminal_record,
            "family_history": self.family_history,
            "surgical_history": self.surgical_history,
            "physical_examination": self.physical_examination,
            "diagnosis": self.diagnosis,
            "treatment": self.treatment,
            "observations": self.observations,
            "date": self.date,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Medical_appoinment(db.Model):
    __tablename__ = 'medical_appoinment'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    doctor_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    file = db.Column(db.String(150), nullable=False)
    comment = db.Column(db.String(500), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "doctor_id": self.doctor_id,
            "file": self.file,
            "comment": self.comment,
            "date": self.date,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()