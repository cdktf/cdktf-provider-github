# `dataGithubRepositoryFile` Submodule <a name="`dataGithubRepositoryFile` Submodule" id="@cdktf/provider-github.dataGithubRepositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryFile <a name="DataGithubRepositoryFile" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file github_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_file

dataGithubRepositoryFile.DataGithubRepositoryFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file: str,
  repository: str,
  branch: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.file">file</a></code> | <code>str</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.branch">branch</a></code> | <code>str</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#id DataGithubRepositoryFile#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.file"></a>

- *Type:* str

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#file DataGithubRepositoryFile#file}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.repository"></a>

- *Type:* str

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#repository DataGithubRepositoryFile#repository}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.branch"></a>

- *Type:* str

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#branch DataGithubRepositoryFile#branch}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#id DataGithubRepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubRepositoryFile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_file

dataGithubRepositoryFile.DataGithubRepositoryFile.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_file

dataGithubRepositoryFile.DataGithubRepositoryFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_file

dataGithubRepositoryFile.DataGithubRepositoryFile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_file

dataGithubRepositoryFile.DataGithubRepositoryFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubRepositoryFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubRepositoryFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubRepositoryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitAuthor">commit_author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitEmail">commit_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitMessage">commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitSha">commit_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.sha">sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `commit_author`<sup>Required</sup> <a name="commit_author" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitAuthor"></a>

```python
commit_author: str
```

- *Type:* str

---

##### `commit_email`<sup>Required</sup> <a name="commit_email" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitEmail"></a>

```python
commit_email: str
```

- *Type:* str

---

##### `commit_message`<sup>Required</sup> <a name="commit_message" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

---

##### `commit_sha`<sup>Required</sup> <a name="commit_sha" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.sha"></a>

```python
sha: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryFileConfig <a name="DataGithubRepositoryFileConfig" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_file

dataGithubRepositoryFile.DataGithubRepositoryFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file: str,
  repository: str,
  branch: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.file">file</a></code> | <code>str</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.repository">repository</a></code> | <code>str</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.branch">branch</a></code> | <code>str</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#id DataGithubRepositoryFile#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.file"></a>

```python
file: str
```

- *Type:* str

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#file DataGithubRepositoryFile#file}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#repository DataGithubRepositoryFile#repository}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.branch"></a>

```python
branch: str
```

- *Type:* str

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#branch DataGithubRepositoryFile#branch}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryFile.DataGithubRepositoryFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_file#id DataGithubRepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



