# `dataGithubOrganizationExternalIdentities` Submodule <a name="`dataGithubOrganizationExternalIdentities` Submodule" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationExternalIdentities <a name="DataGithubOrganizationExternalIdentities" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/organization_external_identities github_organization_external_identities}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/organization_external_identities#id DataGithubOrganizationExternalIdentities#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/organization_external_identities#id DataGithubOrganizationExternalIdentities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubOrganizationExternalIdentities resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubOrganizationExternalIdentities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubOrganizationExternalIdentities to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubOrganizationExternalIdentities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/organization_external_identities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationExternalIdentities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.identities">identities</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList">DataGithubOrganizationExternalIdentitiesIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.identities"></a>

```python
identities: DataGithubOrganizationExternalIdentitiesIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList">DataGithubOrganizationExternalIdentitiesIdentitiesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentities.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationExternalIdentitiesConfig <a name="DataGithubOrganizationExternalIdentitiesConfig" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/organization_external_identities#id DataGithubOrganizationExternalIdentities#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/organization_external_identities#id DataGithubOrganizationExternalIdentities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationExternalIdentitiesIdentities <a name="DataGithubOrganizationExternalIdentitiesIdentities" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentities()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationExternalIdentitiesIdentitiesList <a name="DataGithubOrganizationExternalIdentitiesIdentitiesList" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference <a name="DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_external_identities

dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.samlIdentity">saml_identity</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.scimIdentity">scim_identity</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentities">DataGithubOrganizationExternalIdentitiesIdentities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `saml_identity`<sup>Required</sup> <a name="saml_identity" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.samlIdentity"></a>

```python
saml_identity: StringMap
```

- *Type:* cdktf.StringMap

---

##### `scim_identity`<sup>Required</sup> <a name="scim_identity" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.scimIdentity"></a>

```python
scim_identity: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubOrganizationExternalIdentitiesIdentities
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationExternalIdentities.DataGithubOrganizationExternalIdentitiesIdentities">DataGithubOrganizationExternalIdentitiesIdentities</a>

---



