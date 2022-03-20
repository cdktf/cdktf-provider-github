// https://www.terraform.io/docs/providers/github/d/tree
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubTreeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/tree#recursive DataGithubTree#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/tree#repository DataGithubTree#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/tree#tree_sha DataGithubTree#tree_sha}
  */
  readonly treeSha: string;
}
export class DataGithubTreeEntries extends cdktf.ComplexComputedList {

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sha - computed: true, optional: false, required: false
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/tree github_tree}
*/
export class DataGithubTree extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_tree";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/tree github_tree} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubTreeConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubTreeConfig) {
    super(scope, id, {
      terraformResourceType: 'github_tree',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._recursive = config.recursive;
    this._repository = config.repository;
    this._treeSha = config.treeSha;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: true, optional: false, required: false
  public entries(index: string) {
    return new DataGithubTreeEntries(this, 'entries', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
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

  // tree_sha - computed: false, optional: false, required: true
  private _treeSha?: string; 
  public get treeSha() {
    return this.getStringAttribute('tree_sha');
  }
  public set treeSha(value: string) {
    this._treeSha = value;
  }
  // Temporarily expose input value. Use with caution.
  public get treeShaInput() {
    return this._treeSha;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      recursive: cdktf.booleanToTerraform(this._recursive),
      repository: cdktf.stringToTerraform(this._repository),
      tree_sha: cdktf.stringToTerraform(this._treeSha),
    };
  }
}
