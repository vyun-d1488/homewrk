import oracledb from "oracledb";
import db from "./Service";
import Log from "../middlewares/Log";

class Defaultdata {
	insertClub(_cl) {
		db.executeInsert(
			`INSERT INTO user2.Club (Club, Flag) VALUES (:cN, :cL)`,
			{
				cN: db.createBinding(_cl["Club"]),
				cL: db.createBinding(_cl["Club Logo"]),
			},
			{ autoCommit: true }
		);
	}

	insertPosition(_cl) {
		db.executeInsert(
			`INSERT INTO user2.Position (Posititon) VALUES (:cN)`,
			{
				cN: db.createBinding(_cl["Position"]),
			},
			{ autoCommit: true }
		);
	}
	insertNationality(_cl) {
		db.executeInsert(
			`INSERT INTO user2.Nationality (Nationality, Flag) VALUES (:cN, :cL)`,
			{
				cN: db.createBinding(_cl["Nationality"]),
				cL: db.createBinding(_cl["Flag"]),
			},
			{ autoCommit: true }
		);
	}
	insertPlayerCharacteristics(_cl) {
		db.executeInsert(
			`INSERT INTO user2.PlayerCharacteristics (
						PlayerID, BodyType, RealFace,
						Height, Weigth, PreferedFoot, WeakFoot,
						SkillMove, WorkRate,
						InternationalReputation) VALUES (:cN, :cL, :cA, :cP, :cO, :cPo, :cW, :cS, :cWr, :cI)`,
			{
				cN: db.createBinding(_cl["ID"]),
				cL: db.createBinding(_cl["Body Type"]),
				cA: db.createBinding(_cl["Real Face"]),
				cP: db.createBinding(db.cvert(_cl["Height"])),
				cO: db.createBinding(db.cvert(_cl["Weight"])),
				cPo: db.createBinding(_cl["Preferred Foot"]),
				cW: db.createBinding(_cl["Weak Foot"]),
				cS: db.createBinding(_cl["Skill Moves"]),
				cWr: db.createBinding(_cl["Work Rate"]),
				cI: db.createBinding(_cl["International Reputation"]),
			},
			{ autoCommit: true }
		);
	}
	insertPlayer(_cl) {
		db.executeInsert(
			`INSERT INTO user2.Player (
						PlayerID, PlayerName, Age,
						Photo, Overall,
						Potential, Special, Value) VALUES (:cN, :cL, :cA, :cP, :cO, :cPo, :cS, :cV)`,
			{
				cN: db.createBinding(_cl["ID"]),
				cL: db.createBinding(_cl["Name"]),
				cA: db.createBinding(_cl["Age"]),
				cP: db.createBinding(_cl["Photo"]),
				cO: db.createBinding(_cl["Overall"]),
				cPo: db.createBinding(_cl["Potential"]),
				cS: db.createBinding(_cl["Special"]),
				cV: db.createBinding(db.cvert(_cl["Value"])),
			},
			{ autoCommit: true }
		);
	}
	insertContracts(_cl) {
		db.executeInsert(
			`INSERT INTO user2.Contracts (
						Joined, LoadFrom,
						ContractValidUntil, Wage,
						ReleaseClause) VALUES (:cL, :cA, :cP, :cO, :cPo)`,
			{
				cL: db.createBinding(_cl["Joined"]),
				cA: db.createBinding(_cl["Loaned From"]),
				cP: db.createBinding(_cl["Contract Valid Until"]),
				cO: db.createBinding(db.cvert(_cl["Wage"])),
				cPo: db.createBinding(db.cvert(_cl["Release Clause"])),
			},
			{ autoCommit: true }
		);
	}

	insertPlayerskills(_cl) {
		db.executeInsert(
			`INSERT INTO user2.Playerskills (
							PLAYERID, CROSSING, FINISHING,
							HEADINGACCURACY, SHORTPASSING,
							VOLLEYS, DRIBBLING, CURVE, FKACCURACY,
							LONGPASSING, BALLCONTROL, ACCELERATION,
							SPRINTSPEED, AGILITY, REACTIONS, BALANCE,
							SHOTPOWER, JUMPING, STAMINA, STRENGTH, LONGSHOTS,
							AGGRESSION, INTERCEPTIONS, POSITIONING, VISION,
							PENALTIES, COMPOSURE, MARKING, STANDINGTACKLE,
							SLIDINGTACKLE, GKDIVING, GKHANDLING, GKKICKING,
							GKPOSITIONING, GKREFLEXES)
							VALUES (${_cl.ID}, ${_cl.Crossing}, ${_cl.Finishing}, ${_cl.HeadingAccuracy},
							${_cl.ShortPassing}, ${_cl.Volleys}, ${_cl.Dribbling}, ${_cl.Curve},
							${_cl.FKAccuracy}, ${_cl.LongPassing}, ${_cl.BallControl},
							${_cl.Acceleration}, ${_cl.SprintSpeed}, ${_cl.Agility},
							${_cl.Reactions}, ${_cl.Balance}, ${_cl.ShotPower},
							${_cl.Jumping}, ${_cl.Stamina}, ${_cl.Strength},
							${_cl.LongShots}, ${_cl.Aggression}, ${_cl.Interceptions}, ${_cl.Positioning},
							${_cl.Vision}, ${_cl.Penalties}, ${_cl.Composure}, ${_cl.Marking}, ${_cl.StandingTackle},
							${_cl.SlidingTackle}, ${_cl.GKDiving}, ${_cl.GKHandling}, ${_cl.GKKicking},
							${_cl.GKPositioning},  ${_cl.GKReflexes})`,
			{},
			{ autoCommit: true }
		);
	}
}

export default new Defaultdata();
