import oracledb from "oracledb";
import convert from "csvtojson";

import Locals from "../providers/Locals";
import Log from "../middlewares/Log";

class Players {
	public async mount(): Promise<any> {
		function convertToM(str) {
			let newInt = str.replace(/\D+/g, "");
			while (str.length <= 9) {
				newInt += 0;
			}
			console.log(Number(newInt));
		}

		const csvPath = Locals.config().csvPath;

		return convert()
			.fromFile(csvPath)
			.then((al) => {
				al.map((_cl) => {
					// this.executeInsert(
					// 	`INSERT INTO MINIPR.Club (Club, Flag) VALUES (:cN, :cL)`,
					// 	{
					// 		cN: this.createBinding(_cl["Club"]),
					// 		cL: this.createBinding(_cl["Club Logo"]),
					// 	},
					// 	{ autoCommit: true }
					// );
					// this.executeInsert(
					// 	`INSERT INTO MINIPR.Position (Posititon) VALUES (:cN)`,
					// 	{
					// 		cN: this.createBinding(_cl["Position"]),
					// 	},
					// 	{ autoCommit: true }
					// );
					// this.executeInsert(
					// 	`INSERT INTO MINIPR.Nationality (Nationality, Flag) VALUES (:cN, :cL)`,
					// 	{
					// 		cN: this.createBinding(_cl["Nationality"]),
					// 		cL: this.createBinding(_cl["Flag"]),
					// 	},
					// 	{ autoCommit: true }
					// );
					// this.executeInsert(
					// 	`INSERT INTO MINIPR.Contracts (
					// 	PlayerID, Joined, LoadFrom,
					// 	ContractValidUntil, Wage,
					// 	ReleaseClause) VALUES (:cN, :cL, :cA, :cP, :cO, :cPo)`,
					// 	{
					// 		cN: this.createBinding(_cl["ID"]),
					// 		cL: this.createBinding(_cl["Joined"]),
					// 		cA: this.createBinding(_cl["Loaned From"]),
					// 		cP: this.createBinding(_cl["Contract Valid Until"]),
					// 		cO: this.createBinding(_cl["Wage"]),
					// 		cPo: this.createBinding(_cl["Release Clause"]),
					// 	},
					// 	{ autoCommit: true }
					// );
					// this.executeInsert(
					// 	`INSERT INTO MINIPR.PlayerCharacteristics (
					// 	PlayerID, BodyType, RealFace,
					// 	Height, Weigth, PreferedFoot, WeakFoot,
					// 	SkillMove, WorkRate,
					// 	InternationalReputation) VALUES (:cN, :cL, :cA, :cP, :cO, :cPo, :cW, :cS, :cWr, :cI)`,
					// 	{
					// 		cN: this.createBinding(_cl["ID"]),
					// 		cL: this.createBinding(_cl["Body Type"]),
					// 		cA: this.createBinding(_cl["Real Face"]),
					// 		cP: this.createBinding(_cl["Height"]),
					// 		cO: this.createBinding(_cl["Weigth"]),
					// 		cPo: this.createBinding(_cl["Preferred Foot"]),
					// 		cW: this.createBinding(_cl["Weak Foot"]),
					// 		cS: this.createBinding(_cl["Skill Moves"]),
					// 		cWr: this.createBinding(_cl["Work Rate"]),
					// 		cI: this.createBinding(
					// 			_cl["International Reputation"]
					// 		),
					// 	},
					// 	{ autoCommit: true }
					// );
					// this.executeInsert(
					// 	`INSERT INTO MINIPR.Player (
					// 	PlayerID, PlayerName, Age,
					// 	Photo, Overall,
					// 	Potential, Special) VALUES (:cN, :cL, :cA, :cP, :cO, :cPo, :cS)`,
					// 	{
					// 		cN: this.createBinding(_cl["ID"]),
					// 		cL: this.createBinding(_cl["Name"]),
					// 		cA: this.createBinding(_cl["Age"]),
					// 		cP: this.createBinding(_cl["Photo"]),
					// 		cO: this.createBinding(_cl["Overall"]),
					// 		cPo: this.createBinding(_cl["Potential"]),
					// 		cS: this.createBinding(_cl["Special"]),
					// 	},
					// 	{ autoCommit: true }
					// );
					// this.executeInsert(
					// 	`INSERT INTO MINIPR.Playerskills (
					// 		PLAYERID, CROSSING, FINISHING,
					// 		HEADINGACCURACY, SHORTPASSING,
					// 		VOLLEYS, DRIBBLING, CURVE, FKACCURACY,
					// 		LONGPASSING, BALLCONTROL, ACCELERATION,
					// 		SPRINTSPEED, AGILITY, REACTIONS, BALANCE,
					// 		SHOTPOWER, JUMPING, STAMINA, STRENGTH, LONGSHOTS,
					// 		AGGRESSION, INTERCEPTIONS, POSITIONING, VISION,
					// 		PENALTIES, COMPOSURE, MARKING, STANDINGTACKLE,
					// 		SLIDINGTACKLE, GKDIVING, GKHANDLING, GKKICKING,
					// 		GKPOSITIONING, GKREFLEXES)
					// 		VALUES (${_cl.ID}, ${_cl.Crossing}, ${_cl.Finishing}, ${_cl.HeadingAccuracy},
					// 		${_cl.ShortPassing}, ${_cl.Volleys}, ${_cl.Dribbling}, ${_cl.Curve},
					// 		${_cl.FKAccuracy}, ${_cl.LongPassing}, ${_cl.BallControl},
					// 		${_cl.Acceleration}, ${_cl.SprintSpeed}, ${_cl.Agility},
					// 		${_cl.Reactions}, ${_cl.Balance}, ${_cl.ShotPower},
					// 		${_cl.Jumping}, ${_cl.Stamina}, ${_cl.Strength},
					// 		${_cl.LongShots}, ${_cl.Aggression}, ${_cl.Interceptions}, ${_cl.Positioning},
					// 		${_cl.Vision}, ${_cl.Penalties}, ${_cl.Composure}, ${_cl.Marking}, ${_cl.StandingTackle},
					// 		${_cl.SlidingTackle}, ${_cl.GKDiving}, ${_cl.GKHandling}, ${_cl.GKKicking},
					// 		${_cl.GKPositioning},  ${_cl.GKReflexes})`,
					// 	{},
					// 	{ autoCommit: true }
					// );
				});

				console.log("Done");
			});
	}

	async executeInsert(
		query: string,
		bind: any,
		options: Object
	): Promise<void> {
		await oracledb.getConnection((err, connection: oracledb.connection) => {
			if (err) {
				Log.error(err);
			}

			connection.execute(query, bind, options, (err, al) => {
				if (err) {
					Log.error(err + " at " + query);
					process.exit();
				}

				connection.close();
			});
		});
	}
	public createBinding(
		val: string | number,
		type: oracledb.STRING = oracledb.STRING,
		dir: oracledb.BIND_IN = oracledb.BIND_IN
	): Object {
		if (Number(val)) {
			val = Number(val);
			type = oracledb.NUMBER;
		}
		return {
			val,
			type,
			dir,
		};
	}
}

export default new Players();
