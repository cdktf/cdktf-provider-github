// https://www.terraform.io/docs/providers/github/d/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/users#id DataGithubUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/users#usernames DataGithubUsers#usernames}
  */
  readonly usernames: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/users github_users}
*/
export class DataGithubUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_users";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/users github_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'github_users',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.10.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._usernames = config.usernames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logins - computed: true, optional: false, required: false
  public get logins() {
    return this.getListAttribute('logins');
  }

  // node_ids - computed: true, optional: false, required: false
  public get nodeIds() {
    return this.getListAttribute('node_ids');
  }

  // unknown_logins - computed: true, optional: false, required: false
  public get unknownLogins() {
    return this.getListAttribute('unknown_logins');
  }

  // usernames - computed: false, optional: false, required: true
  private _usernames?: string[]; 
  public get usernames() {
    return this.getListAttribute('usernames');
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usernames),
    };
  }
}
