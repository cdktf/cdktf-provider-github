// https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/ref
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRefConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/ref#id DataGithubRef#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/ref#owner DataGithubRef#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/ref#ref DataGithubRef#ref}
  */
  readonly ref: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/ref#repository DataGithubRef#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/ref github_ref}
*/
export class DataGithubRef extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_ref";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/ref github_ref} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRefConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRefConfig) {
    super(scope, id, {
      terraformResourceType: 'github_ref',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.28.1',
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
    this._owner = config.owner;
    this._ref = config.ref;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // sha - computed: true, optional: false, required: false
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      ref: cdktf.stringToTerraform(this._ref),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
