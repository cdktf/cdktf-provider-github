# `organizationCustomProperties` Submodule <a name="`organizationCustomProperties` Submodule" id="@cdktf/provider-github.organizationCustomProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationCustomProperties <a name="OrganizationCustomProperties" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties github_organization_custom_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_custom_properties

organizationCustomProperties.OrganizationCustomProperties(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  property_name: str,
  allowed_values: typing.List[str] = None,
  default_value: str = None,
  description: str = None,
  id: str = None,
  required: bool | IResolvable = None,
  values_editable_by: str = None,
  value_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.propertyName">property_name</a></code> | <code>str</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | The allowed values of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.defaultValue">default_value</a></code> | <code>str</code> | The default value of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.required">required</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the custom property is required. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.valuesEditableBy">values_editable_by</a></code> | <code>str</code> | Who can edit the values of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.valueType">value_type</a></code> | <code>str</code> | The type of the custom property. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `property_name`<sup>Required</sup> <a name="property_name" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.propertyName"></a>

- *Type:* str

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#property_name OrganizationCustomProperties#property_name}

---

##### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.allowedValues"></a>

- *Type:* typing.List[str]

The allowed values of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#allowed_values OrganizationCustomProperties#allowed_values}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.defaultValue"></a>

- *Type:* str

The default value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#default_value OrganizationCustomProperties#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.description"></a>

- *Type:* str

The description of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#description OrganizationCustomProperties#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.required"></a>

- *Type:* bool | cdktf.IResolvable

Whether the custom property is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#required OrganizationCustomProperties#required}

---

##### `values_editable_by`<sup>Optional</sup> <a name="values_editable_by" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.valuesEditableBy"></a>

- *Type:* str

Who can edit the values of the custom property.

Can be one of 'org_actors' or 'org_and_repo_actors'. If not specified, the default is 'org_actors' (only organization owners can edit values)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#values_editable_by OrganizationCustomProperties#values_editable_by}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.valueType"></a>

- *Type:* str

The type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#value_type OrganizationCustomProperties#value_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetAllowedValues">reset_allowed_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValuesEditableBy">reset_values_editable_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_values` <a name="reset_allowed_values" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetAllowedValues"></a>

```python
def reset_allowed_values() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_values_editable_by` <a name="reset_values_editable_by" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValuesEditableBy"></a>

```python
def reset_values_editable_by() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValueType"></a>

```python
def reset_value_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationCustomProperties resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import organization_custom_properties

organizationCustomProperties.OrganizationCustomProperties.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import organization_custom_properties

organizationCustomProperties.OrganizationCustomProperties.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import organization_custom_properties

organizationCustomProperties.OrganizationCustomProperties.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import organization_custom_properties

organizationCustomProperties.OrganizationCustomProperties.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationCustomProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationCustomProperties to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationCustomProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationCustomProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValuesInput">allowed_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyNameInput">property_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.requiredInput">required_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valuesEditableByInput">values_editable_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyName">property_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.required">required</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valuesEditableBy">values_editable_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `allowed_values_input`<sup>Optional</sup> <a name="allowed_values_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValuesInput"></a>

```python
allowed_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `property_name_input`<sup>Optional</sup> <a name="property_name_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyNameInput"></a>

```python
property_name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `values_editable_by_input`<sup>Optional</sup> <a name="values_editable_by_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valuesEditableByInput"></a>

```python
values_editable_by_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `property_name`<sup>Required</sup> <a name="property_name" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyName"></a>

```python
property_name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `values_editable_by`<sup>Required</sup> <a name="values_editable_by" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valuesEditableBy"></a>

```python
values_editable_by: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationCustomPropertiesConfig <a name="OrganizationCustomPropertiesConfig" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_custom_properties

organizationCustomProperties.OrganizationCustomPropertiesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  property_name: str,
  allowed_values: typing.List[str] = None,
  default_value: str = None,
  description: str = None,
  id: str = None,
  required: bool | IResolvable = None,
  values_editable_by: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.propertyName">property_name</a></code> | <code>str</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | The allowed values of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.defaultValue">default_value</a></code> | <code>str</code> | The default value of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.description">description</a></code> | <code>str</code> | The description of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.required">required</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the custom property is required. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valuesEditableBy">values_editable_by</a></code> | <code>str</code> | Who can edit the values of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valueType">value_type</a></code> | <code>str</code> | The type of the custom property. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `property_name`<sup>Required</sup> <a name="property_name" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.propertyName"></a>

```python
property_name: str
```

- *Type:* str

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#property_name OrganizationCustomProperties#property_name}

---

##### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

The allowed values of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#allowed_values OrganizationCustomProperties#allowed_values}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

The default value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#default_value OrganizationCustomProperties#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#description OrganizationCustomProperties#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the custom property is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#required OrganizationCustomProperties#required}

---

##### `values_editable_by`<sup>Optional</sup> <a name="values_editable_by" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valuesEditableBy"></a>

```python
values_editable_by: str
```

- *Type:* str

Who can edit the values of the custom property.

Can be one of 'org_actors' or 'org_and_repo_actors'. If not specified, the default is 'org_actors' (only organization owners can edit values)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#values_editable_by OrganizationCustomProperties#values_editable_by}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_custom_properties#value_type OrganizationCustomProperties#value_type}

---



